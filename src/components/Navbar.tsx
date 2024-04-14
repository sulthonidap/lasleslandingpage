
const Navbar = () => {

    

  return (
    <div className="container mx-auto px-6 py-6 md:px-28 md:flex md:justify-between items-center">
        <div>
            <img src="/logo.svg" alt="" />
        </div>
        <div className="hidden md:flex ">
            <ul className="flex gap-6">
                <li className="hover:text-[#F53838] hover:border-b-2 hover:font-bold"><a href="">Home</a></li>
                <li className="hover:text-[#F53838] hover:border-b-2 hover:font-bold"><a href="">Feature</a></li>
                <li className="hover:text-[#F53838] hover:border-b-2 hover:font-bold"><a href="">Pricing</a></li>
                <li className="hover:text-[#F53838] hover:border-b-2 hover:font-bold"><a href="">Testimonial</a></li>
                <li className="hover:text-[#F53838] hover:border-b-2 hover:font-bold"><a href="">Help</a></li>
            </ul>
        </div>
        <div className="hidden md:flex gap-6">
            <button className="">Login</button>
            <button className="text-white bg-[#F53838] px-6 py-2 rounded">Sign Up</button>

        </div>
    </div>
  )
}

export default Navbar