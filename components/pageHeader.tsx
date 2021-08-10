import Link from 'next/link';

interface PageHeaderProps {
  title?: string | string[] | undefined;
}

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="p-10 bg-indigo-600 shadow mb-10 flex items-center">
      {props.title !== 'Home' && (
        <span className="inline-block mr-6">
          <Link href="/">👈</Link>
        </span>
      )}
      <h1 className="text-3xl text-white font-bold">{props.title}</h1>
    </div>
  );
};
