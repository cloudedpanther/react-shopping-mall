import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1 className="mt-20 sm:mt-28 text-center text-3xl sm:text-9xl font-bold">
        ERROR
      </h1>
      <p className="mt-4 mb-5 sm:mb-10 text-center text-lg sm:text-3xl">
        원인을 알 수 없는 에러가 발생했습니다.
      </p>
      <div className="text-center">
        <Link className="btn btn-md sm:btn-lg btn-primary sm:w-40" to="/">
          메인으로
        </Link>
      </div>
    </div>
  );
}
