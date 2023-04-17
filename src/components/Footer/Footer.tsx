import { Link } from 'react-router-dom';
import GithubIcon from '../../icons/GithubIcon';
import BlogIcon from '../../icons/BlogIcon';

export default function Footer() {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div>
        <p>고영준 | cloudedpanther</p>
      </div>
      <div className="grid grid-flow-col gap-4">
        <Link
          to="https://blog.naver.com/cloudedpanther"
          target="_blank"
          data-tip="naver blog"
          className="tooltip ml-1">
          <BlogIcon />
        </Link>
        <Link
          to="https://github.com/cloudedpanther"
          target="_blank"
          data-tip="github"
          className="tooltip ml-1">
          <GithubIcon />
        </Link>
      </div>
      <div>
        <p>Copyright &copy; 2023 Youngjun Koh</p>
      </div>
    </footer>
  );
}
