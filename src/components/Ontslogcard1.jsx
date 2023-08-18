export default function Ontslogcard1({image, title,desc }) {
    return (
      <div class= "my-8">
        <div className='flex flex-col items-center justify-center rounded-md'>
        <div className='bg-[#F7B2BF] p-2 rounded-full'>
          <img className="bg-navbar-backgruond rounded-full p-2 fill-black" src={image} />
        </div>
        <h1 className='text-2xl font-bold mt-4'>{title}</h1>
        <p className='font-bold'>{desc}</p>
      </div>
      </div>

    )}