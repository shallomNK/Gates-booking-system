

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-white mb-6">About Us</h1>
    <p className="text-xl text-white text-center mb-4">
        PK Gates is dedicated to providing high-quality gates and fencing solutions tailored to your needs.
    </p>
    <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-white">
                Our mission is to enhance the security and beauty of homes and businesses with top-notch gates designed for durability and style.
            </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h2 className="text-2xl font-semibold mb-3">Our History</h2>
            <p className="text-white">
                Founded in 2010, PK Gates has grown from a small local workshop to a leader in the gate industry, serving thousands of customers nationwide.
            </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <p className="text-white">
                We combine innovative design, exceptional craftsmanship, and personal service to create products that meet your exact needs.
            </p>
        </div>
    </div>
</div>
  )
}

export default About