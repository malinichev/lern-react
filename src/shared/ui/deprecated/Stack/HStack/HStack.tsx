import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 * */
export const HStack = (props: HStackProps) => {
    const { children, ...otherProps } = props;
    return (
        <Flex direction="row" {...otherProps}>
            {children}
        </Flex>
    );
};
