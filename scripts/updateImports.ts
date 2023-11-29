import { Project } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
});

project.addSourceFilesAtPaths('src/**/*{.d.ts,.ts}');
const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
};

files.forEach((files) => {
    const importDeclarations = files.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
