import Nav from '../../components/Nav'
import SideSVG from '../../assets/Side Image.svg'
import Hair from '../../assets/mingcute_hair-fill.svg'
import Nails from '../../assets/nail.svg'
import eye from '../../assets/eye.svg'
import vector from '../../assets/Vector.svg'
import Men from '../../assets/Frame 874.svg'
import Iconi from '../../assets/Frame 877.svg'
import Women from '../../assets/Frame 875.svg'
import Men2 from '../../assets/Frame 876.svg'
import Scroll from '../../assets/Frame 883.svg'
import Ant from '../../assets/ant.svg'
import fluent from '../../assets/fluent.svg'
import ic from '../../assets/ic.svg'
import fb from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import phone from '../../assets/icons8-phone.svg'
import email from '../../assets/icons8-email-96.png'
import Card1 from '../../components/Card1'
import EzgifSVG from '../../assets/ezgif 4.svg'
import Breadcrumb from '../../components/Breadcrumb'
import Profilecard1 from '../../components/Profilecard1'
import Ontslogcard1 from '../../components/ontslogcard1'
import fast from '../../assets/fast.svg'

function About() {

  const breadcrumb = [
    {
      title: "Тухай",
      href: "/"
    },
  ]

  const card1Data = [
    {
      title: "Үс",
      desc: ".........",
      image: Hair
    },
    {
      title: "Хумс",
      desc: ".........",
      image: Nails
    },
    {
      title: "Сормуус",
      desc: ".........",
      image: eye
    },
    {
      title: "Make up",
      desc: ".........",
      image: vector
    },
  ]
  const profilecard1 = [
    {
      title: "Tom cruise",
      desc: "Маникюрчин",
      image: Men
    },
    {
      title: "Tom cruise",
      desc: "Маникюрчин",
      image: Men
    },
    {
      title: "Tom cruise",
      desc: "Маникюрчин",
      image: Men
    },
  ]
  const ontslogcard1 = [
    {
      title: "Найдвартай,Баталгаатай",
      desc: "..............",
      image: Ant
    },
    {
      title: "Шинэлэг",
      desc: "............",
      image: vector
    },
    {
      title: "Түргэн шуурхай",
      desc: ".......",
      image: fast
    },
  ]




  console.log(card1Data);

  return (
    <>
      <Breadcrumb
        data={breadcrumb}
      />
      <div className="md:flex">
        <div className="md:w-[50vw] my-auto mx-8 md:mx-[135px]">
          <h3 className="text-navbar-backgruond text-5xl">Бидний тухай </h3>
          <p className="text-black text-sm md:text-base mt-10 ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="text-black text-sm md:text-base mt-10">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>
        </div>
        <div className="flex justify-end">
          <img src={SideSVG} />
        </div>
      </div>
      <div className="pt-28">
        <div dir="ltr">
          <div className="">

            <div className="items-center grid grid-cols-2 md:grid-cols-4 gap-3 pt-28 ">
              {card1Data.map((data, index) => (
                <Card1
                  key={index}
                  image={data.image}
                  title={data.title}
                  desc={data.desc}
                />
              ))}
              </div>

         

          </div>/

        </div>

      </div>
      <div class="grid justify-items-center text-3xl pt-28 ">Үсчний мэдээлэл</div>
      <div className="flex justify-evenly pt-10 gap-3">
        {profilecard1.map((data, index) => (
          <Profilecard1
            key={index}
            title={data.title}
            image={data.image}
            desc={data.desc}
          />
        ))}
       
      </div>
      <div className="flex justify-evenly pt-28">
        <img src={Scroll} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-28">
        {ontslogcard1.map((data, index) => (
          <Ontslogcard1
            key={index}
            title={data.title}
            image={data.image}
            desc={data.desc}
          />
        ))}
      </div>

      {/* <div className='md:flex space-x-8 bg-navbar-backgruond mt-10 pt-5 py-2 justify-evenly'>
        <div>
          <div className='font-bold text 2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 mix-blend-lighten'>
            <img src={EzgifSVG} />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-4">
            <div className="text-white text-lg font-thin uppercase">СБД, 1-р хороо, Их монгол улсын гудамж-04</div>
            <div className="text-white text-lg font-thin uppercase">Monday-Friday: 9am–9pm | Saturday: 9am–5pm</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-4 pl-4">
            <div className="text-white text-lg font-thin uppercase">+976 | 301-695-7777 | webcontact@nynyhair.com</div>
            <div>
              <div className="flex space-x-2 ">
                <img className='w-8 h-8' src={fb} />
                <img className='w-8 h-8' src={insta} />
                <img className='w-8 h-8' src={phone} />
                <img className='w-8 h-8' src={email} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default About
