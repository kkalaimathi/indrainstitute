



"use client";


interface Image {
    url: string;
}

const Testimonials = () => {



    return (
        <section id="" className="w=full">
            <div className="bg-gray-200 ">
                <br />
                <h2 className="text-4xl font-extrabold text-center lg:text-7xl  lg:ml-24 text-black caveat">Testimonials</h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">

                    <div className="bg-white shadow-md p-4">
                        <h2 className="text-xl font-bold text-rose-700 mb-2"> Great for All Ages</h2>
                       
                       <br />
                        <p className="text-red-500">"My daughter and I both attend classes at Indra Institute Of Training, and we love it!"</p>
                        <br /><br /><br /><br /><br /><br /><p>__Kalaimathi Kannadhasan</p>
                    </div>


                    <div className="bg-white shadow-md p-4">
                        <h2 className="text-xl text-rose-700 font-bold mb-2">Transformative Learning Experience</h2>
                        <br /><p className="text-red-500">"Joining Indra Institute Of Training has been a life-changing experience for me. The instructors are not only incredibly talented but also deeply passionate about teaching. They helped me improve my technique and develop confidence, both on and off the stage. I never imagined I'd progress so much in such a short time!"</p>
                        <br /><p>__Bharani, Contemporary Dance Student</p>
                    </div>


                    <div className="bg-white shadow-md p-4">
                        <h2 className="text-xl text-rose-700 font-bold mb-2">Supportive and Nurturing Environment</h2>
                        <br /><p className="text-red-500">"The environment at Indra Institute Of Training is so welcoming and encouraging. From beginners to advanced dancers, everyone is treated with respect and given the opportunity to grow. The focus on individual development makes every class a valuable experience."</p>
                        <br /><p>___Saran,All-Around Dance Enthusiast</p>
                    </div>


                    <div className="bg-white shadow-md p-4">
                        <h2 className="text-xl text-rose-600 font-bold mb-2">Diverse Dance Styles</h2>
                        <br /><p className="text-red-500">"What I love most about Indra Institute Of Training is the variety of dance styles offered. I’ve had the opportunity to explore everything from hip-hop to jazz, and the instructors are experts in every form. The diverse curriculum keeps me excited and motivated!"</p>
                        <br /><p>___Aravind, Advanced Ballet Student</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Testimonials;
