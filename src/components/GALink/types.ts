export interface GALinkProps extends React.ComponentPropsWithoutRef<'a'> {
  gaText: string;
  nextLink?: {
    page: string;
    locale?: string;
  };
}
