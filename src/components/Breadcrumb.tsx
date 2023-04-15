interface BreadcrumbProps {
  pageHistory: string[];
}

export default function Breadcrumb({ pageHistory }: BreadcrumbProps) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {pageHistory.map((pageName) => {
          return <li key={pageName}>{pageName}</li>;
        })}
      </ul>
    </div>
  );
}
