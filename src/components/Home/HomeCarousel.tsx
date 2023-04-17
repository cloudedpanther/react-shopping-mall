import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import { Link } from 'react-router-dom';

const itemList = [
  {
    id: 111,
    src: '/public/img_shop_fashion.jpeg',
    alt: 'fashion',
    title: '물빠진 청바지!',
    desc: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    url: '/fashion',
  },
  {
    id: 222,
    src: '/public/img_shop_digital.jpeg',
    alt: 'digital',
    title: '신속한 업무처리!',
    desc: '다양한 디지털 상품을 둘러보세요.',
    url: '/digital',
  },
  {
    id: 333,
    src: '/public/img_shop_grocery.jpeg',
    alt: 'grocery',
    title: '신선한 식품!',
    desc: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
    url: '/grocery',
  },
];

export default function HomeCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      className="carousel-container">
      {itemList.map((item) => {
        return (
          <div key={item.id} className="carousel-slide">
            <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
              <h2 className="text-2xl lg:text-4xl font-bold text-white">
                {item.title}
              </h2>
              <p className="my-2 text-white">{item.desc}</p>
              <Link className="btn btn-sm lg:btn-md mt-3" to={item.url}>
                바로가기
                <ArrowRightIcon />
              </Link>
            </div>
            <img src={item.src} alt={item.alt} />
          </div>
        );
      })}
    </Carousel>
  );
}
