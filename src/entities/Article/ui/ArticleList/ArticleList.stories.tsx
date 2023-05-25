import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleView } from '../../../../entities/Article/model/types/article';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import avatar from '../../../../shared/assets/avatar.jpeg';
import { ArticleList } from './ArticleList';

const mockArticle = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: avatar,
    views: 1022,
    user: {
        id: '1',
        username: 'Seg',
        avatar,
    },
    createdAt: '26.02.2022',
    type: ['IT', 'SCIENCE', 'POLITICS', 'ECONOMIC'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
} as Article;

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const SMALL = Template.bind({});

SMALL.args = {
    articles: Array(9).fill(mockArticle),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const BIG = Template.bind({});

BIG.args = {
    articles: Array(3).fill(mockArticle),
    isLoading: false,
    view: ArticleView.BIG,
};

export const SmallLoading = Template.bind({});

SmallLoading.args = {
    isLoading: true,
    view: ArticleView.SMALL,
};

export const BigLoading = Template.bind({});

BigLoading.args = {
    isLoading: true,
    view: ArticleView.BIG,
};

export const SmallDark = Template.bind({});
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
SmallDark.args = {
    articles: Array(9).fill(mockArticle),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const BigDark = Template.bind({});
BigDark.decorators = [ThemeDecorator(Theme.DARK)];

BigDark.args = {
    articles: Array(3).fill(mockArticle),
    isLoading: false,
    view: ArticleView.BIG,
};

export const SmallDarkLoading = Template.bind({});
SmallDarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
SmallDarkLoading.args = {
    isLoading: true,
    view: ArticleView.SMALL,
};

export const BigDarkLoading = Template.bind({});
BigDarkLoading.decorators = [ThemeDecorator(Theme.DARK)];
BigDarkLoading.args = {
    isLoading: true,
    view: ArticleView.BIG,
};
