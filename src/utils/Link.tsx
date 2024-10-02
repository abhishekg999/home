export function Link({ href, children, ...props }: any) {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}
