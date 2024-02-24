export interface LinksProps extends React.ComponentPropsWithoutRef<'a'> {
  nextLink?: {
    page: string;
    locale?: string;
  };
}
