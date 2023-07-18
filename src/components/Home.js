import React from 'react'
import '../css folder/Home.css'
import Slider from "react-slick";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../images/Mask group (1).png'
import img2 from '../images/Mask group (2).png'
import img3 from '../images/Mask group (3).png'
import img4 from '../images/Mask group (4).png'
import img5 from '../images/Group 145.png'
import img6 from '../images/Mask).png'
import img7 from '../images/pawprint 1.png'
import img8 from '../images/live-music 1.png'
import img9 from '../images/image 36.png'
import img10 from '../images/image 35.png'
import img11 from '../images/disco-ball 1.png'
import img12 from '../images/community 1.png'
import img13 from '../images/podium 1.png'
import img14 from '../images/creative-tools 1.png'
import img15 from '../images/dance 1.png'
import img16 from '../images/college-graduation 1.png'
import img17 from '../images/emergency 1.png'
import img18 from '../images/seeding 1.png'
import img19 from '../images/disco-ball 2.png'
import img20 from '../images/event 1.png'
import img21 from '../images/father-daughter-and-mother 1.png'
import img22 from '../images/fraternity 1.png'
import img23 from '../images/candle 1.png'
import img24 from '../images/ribbon 1.png'
import img25 from '../images/health-insurance 1.png'
import img26 from '../images/canadian-national-vimy-memorial 1.png'
import img27 from '../images/charity 1.png'
import img28 from '../images/kidney 1.png'
import img29 from '../images/school 1.png'
import img30 from '../images/runer-silhouette-running-fast 1.png'
import img31 from '../images/sorority 1.png'
import img32 from '../images/volleyball 1.png'
import img33 from '../images/community 2.png'
import img34 from '../images/track 1.png'
import img35 from '../images/airplane-around-earth 1.png'
import img36 from '../images/medal 1.png'
import img37 from '../images/accountable 1.png'
import img38 from '../images/boy 1.png'
import img39 from '../images/two-big-hermetic-packages-with-blank-labels-presented-front-craft-paper-bag-rustic-wooden-brick-red-table 3.png'
import img40 from '../images/Group 189.png'
import img41 from '../images/Group 235.png'
import img42 from '../images/Vector.jpg'
import img43 from '../images/image 9.png'
import img44 from '../images/image 46.png'
import img45 from '../images/image 45.png'
import img46 from '../images/image 44.png'
import img47 from '../images/image 42.png'
import img48 from '../images/image 43.png'
import img49 from '../images/image 41.png'

const Home = () => {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Navbar />
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="heading  ">
                            <h2 className='text-start'>Delish Popcorn</h2>
                            <h2 className='text-start'> Pop-Up Shop Virtual </h2>
                            <h2 className='text-start'>Fundraising Platform</h2>
                        </div>
                        <div className="features mt-4 feature-edit">

                            <div className="row ">
                                <div className="col-md-6 text-start  "> <h5 className='feature-color '><img className='feature-img' src={img1} alt="" /> Secure Online</h5></div>
                                <div className="col-md-6 text-start" > <h5 className='feature-color '><img className='feature-img' src={img2} alt="" /> No Fee</h5></div>
                                <div className="w-100"></div>
                                <div className="col-md-6 text-start "> <h5 className='feature-color '><img className='feature-img' src={img3} alt="" /> Fast, Friendly</h5></div>
                                <div className="col-md-6 text-start ">  <h5 className='feature-color '><img className='feature-img' src={img4} alt="" />Risk-Free </h5></div>
                            </div>

                        </div>
                        <div className="button mt-4">
                            <button className='btn btn-primary btn-edit d-flex justify-content-start'>Start Raising Fund </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Popcorn-img">
                            <img className='img-fluid Popcorn-img-edit' src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="section-2 ">

                    <div className="laptop-img">
                        <img className='img-fluid ' src={img6} alt="" />
                        <div className="text">
                            <div className="heading-1 py-2">
                                <h6>Gourmet popcorn shop</h6>
                            </div>
                            <div className="heading-2 py-2">
                                <h3> VIRTUAL FUNDRAISING</h3>
                            </div>
                            <div className="heading-3 py-2">
                                Delish Popcorn Pop-Up Shop Virtual Fundraising Platform Benefits
                            </div>
                            <div className="heading-3 ">Each Pop-Up Shop Receives 60% of the Profits</div>
                            <div className="laptop-button mt-4 fs-5">
                                <button className='btn btn-primary laptopbtn'>Get started</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className="section-3 mt-5">
                    <div className="heading-a ">
                        <h4>Year-Round Virtual Online Fundraising for</h4>
                    </div>
                    <div className="heading-b">
                        <h4>A-to-Z Fundraising Goals </h4>
                    </div>
                    <div className="para">
                        <p>All Individual Financial Needs</p>
                    </div>

                    <div className="container">

                        <div className="d-flex flex-wrap flex-md-row pt-3">


                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img7} alt="" /> </div>
                                <div><p>Animal & Pet</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img8} alt="" /> </div>
                                <div><p>Bands</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img9} alt="" /> </div>
                                <div>  <p>Causes</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img10} alt="" /> </div>
                                <div><p>Churches</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img11} alt="" /> </div>
                                <div> <p>Clubs</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img12} alt="" /> </div>
                                <div> <p>Community</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img13} alt="" /> </div>
                                <div><p>Competition</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img14} alt="" /> </div>
                                <div><p>Creative</p></div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap flex-md-row pt-3">


                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img15} alt="" /> </div>
                                <div><p>Dance Studios</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img16} alt="" /> </div>
                                <div><p>Education</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img17} alt="" /> </div>
                                <div>  <p>Emergencies</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img18} alt="" /> </div>
                                <div><p>Environment</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img19} alt="" /> </div>
                                <div> <p>Clubs</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img20} alt="" /> </div>
                                <div> <p>Events</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img21} alt="" /> </div>
                                <div><p>Family</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img22} alt="" /> </div>
                                <div><p>Fraternities</p></div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap flex-md-row pt-3">


                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img23} alt="" /> </div>
                                <div><p>Funeral</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img24} alt="" /> </div>
                                <div><p>Health Awareness</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img25} alt="" /> </div>
                                <div>  <p>Medical</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img26} alt="" /> </div>
                                <div><p>Memorial</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img27} alt="" /> </div>
                                <div> <p>Non-Profit</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img28} alt="" /> </div>
                                <div> <p>Organizations</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img29} alt="" /> </div>
                                <div><p>Schools &
                                    Pre-Schools</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img30} alt="" /> </div>
                                <div><p>Runs</p></div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap flex-md-row  pt-3">


                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img31} alt="" /> </div>
                                <div><p>Sororities</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img32} alt="" /> </div>
                                <div><p>Sports</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img33} alt="" /> </div>
                                <div>  <p>Teams</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img34} alt="" /> </div>
                                <div><p>Track & Field</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img35} alt="" /> </div>
                                <div> <p>Travel</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img36} alt="" /> </div>
                                <div> <p>Veteran</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img37} alt="" /> </div>
                                <div><p>Volunteer</p></div>
                            </div>

                            <div className="p-2 logo-box">
                                <div className="logo-edit"><img src={img38} alt="" /> </div>
                                <div><p>Youth Group</p></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section>
                <div className="section-4">
                    <div className="container my-5">
                        <div className="row ">
                            <div className="col-md-6 mt-5">
                                <div className="section4-img ">
                                    <img className='img-fluid section4-img-edit' src={img39} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className='section4-text mt-3'>
                                    <h4 className='section4-text-h1 text-start '>Hassle-Free Fundraising</h4>
                                    <h4 className='section4-text-h2 text-start '>Benefits <span className='section4-text-h2-1'>of Delish Popcorn </span></h4>
                                    <h4 className='section4-text-h3 text-start '>Pop-Up Shop</h4>
                                </div>

                                <div className='mt-5'>
                                    <p className='section4-text2 text-start'>No Platform Fees. No Minimum Requirements. No</p>
                                    <p className='section4-text2 text-start'> Brochures. No Forms or Paperwork. No Funds to</p>
                                    <p className='section4-text2 text-start'> Collect. No Products to Deliver.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="section-4">
                    <div className="container my-5">
                        <div className="row ">

                            <div className="col-md-6 mt-5">
                                <div className='section4-text mt-3'>
                                    <h4 className='section4-text-h1-a text-start '><span className='section4-text-h2-1-a'> Guaranteed  </span> Delish</h4>
                                    <h4 className='section4-text-h2-b text-start '>Popcorn Popping</h4>
                                    <h4 className='section4-text-h3-c text-start '>Success</h4>
                                </div>

                                <div className='mt-5'>
                                    <p className='section4-text2 text-start'>We pop, pack, and ship all products directly to the </p>
                                    <p className='section4-text2 text-start'> purchaser. You keep 60% profit from your Virtual </p>
                                    <p className='section4-text2 text-start'> Pop-Up Shop what you sell. </p>
                                </div>

                            </div>

                            <div className="col-md-6 mt-5">
                                <div className="section4-img ">
                                    <img className='img-fluid section4-img-edit' src={img40} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-4">
                    <div className="container my-5">
                        <div className="row ">
                            <div className="col-md-6 mt-5">
                                <div className="section4-img ">
                                    <img className='img-fluid section4-img-edit' src={img41} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className='section4-text mt-3'>
                                    <h4 className='section4-text-h1-a text-start '><span className='section4-text-h2-1-a'> Quick   </span>Pay Out</h4>

                                </div>

                                <div className='mt-5'>
                                    <p className='section4-text2 text-start'>Delish Popcorn payout issues a check or direct </p>
                                    <p className='section4-text2 text-start'> bank deposit for your profits between five to</p>
                                    <p className='section4-text2 text-start'>seven days after the conclusion of your virtual</p>
                                    <p className='section4-text2 text-start'>pop-up shop fundraiser.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <div className="conatiner mt-4">
                    <div className="section-5">
                        <h3 className='section-5-heading'> Getting Started: It is easy as <span className='section-5-heading-1'>1-2-3!</span></h3>
                        <div className="paragraph-section-5 mt-5">
                            <p className='paragraph-section-5-edit'>Delish Popcorn Pop-up Shop is a seven-day online fundraiser designed to assist A-to-Z Fundraising Goals to meet their desired </p>
                            <p className='paragraph-section-5-edit'>goals without ever leaving home. Everyone will receive a Delish Popcorn personalized link to share with family and friends. This</p>
                            <p className='paragraph-section-5-edit'>link will connect supporters to the Pop-Up shop you have created using the Delish app.  </p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="section-6 mt-5">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className='top-edit'>
                                    <div class="card edit-card-1" >
                                        <div class="card-body">

                                            <h5 class="card-subtitle mb-2 card-heading text-start ">Personalize Your Delish Popcorn Pop-Up Shop</h5>
                                            <p class="card-text card-para text-start">Decide the overall goal you would like to achieve during your seven-day Pop-Up. Once established, upload a picture or video of yourself, your team, your organization, someone in need, or yourself.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div className="top-edit-1">
                                    <div class="card edit-card-2" >
                                        <div class="card-body">

                                            <h5 class="card-subtitle mb-2 card-heading text-start ">Participation</h5>
                                            <p class="card-text card-para text-start">Decide the overall goal you would like to achieve during your seven-day Pop-Up. Once established, upload a picture or video of yourself, your team, your organization, someone in need, or yourself.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                                <div class="card edit-card-3" >
                                    <div class="card-body">

                                        <h5 class="card-subtitle mb-2 card-heading text-start ">Quick and Easy Set-Up</h5>
                                        {/* <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" /> Download The App</p>
                                        <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" />  Provide contact information to send proceeds</p>
                                        <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" /> Establish the dates of your shop</p>
                                        <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" /> Receive your personalized fundraiser code and link</p>
                                        <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" />  Share your link with friends and family</p>
                                        <p class="card-text card-para-1 text-start "><img className='mx-3' src={img42} alt="" />   Post your Delish Popcorn Pop-Up Shop event on social media; send text, and email messages to family, friends, and neighbors.</p> */}
                                        <ul>
                                            <li className='text-start card-para-1 remove-dot'> <img  className='mx-3 vector' src={img42} alt="" /> Download The App</li>
                                            <li className='text-start card-para-1 remove-dot'> <img  className='mx-3 vector' src={img42} alt="" /> Provide contact information to send proceeds</li>
                                            <li className='text-start card-para-1 remove-dot'><img  className='mx-3 vector' src={img42} alt="" />Establish the dates of your shop</li>
                                            <li className='text-start card-para-1 remove-dot'><img  className='mx-3 vector' src={img42} alt="" />Receive your personalized fundraiser code and link</li>
                                            <li className='text-start card-para-1 remove-dot'><img className='mx-3 vector'  src={img42} alt="" /> Share your link with friends and family</li>
                                            <li className='text-start card-para-1 remove-dot'><img className='mx-3 vector'  src={img42} alt="" /> Post your Delish Popcorn Pop-Up Shop event on social media; send text, and email messages to family, friends, and neighbors.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="section-7 mt-5">
                    <div className="container">
                        <h2 className='text-Testimonials'>Testimonials</h2>
                        <div className="slider mt-5">


                            <Slider {...settings} >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 ">
                                            <div className='testo-text-padding'>
                                                <img className='testo-img mx-5' src={img43} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 testo-text-padding">
                                            <p className='testo-text mx-5 text-start '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                            <p className='testo-text-1 mx-5 text-start '> copy is available typeface without relying on meaningful.</p>
                                            <p className='testo-text-2 mx-5 text-start'>typeface without</p>
                                            <p className='testo-text-3 mx-5 text-start'>meaningful</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 ">
                                            <div className='testo-text-padding'>
                                                <img className='testo-img mx-5' src={img43} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 testo-text-padding">
                                            <p className='testo-text mx-5 text-start '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                            <p className='testo-text-1 mx-5 text-start '> copy is available typeface without relying on meaningful.</p>
                                            <p className='testo-text-2 mx-5 text-start'>typeface without</p>
                                            <p className='testo-text-3 mx-5 text-start'>meaningful</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 ">
                                            <div className='testo-text-padding'>
                                                <img className='testo-img mx-5' src={img43} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9 testo-text-padding">
                                            <p className='testo-text mx-5 text-start '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                            <p className='testo-text-1 mx-5 text-start '> copy is available typeface without relying on meaningful.</p>
                                            <p className='testo-text-2 mx-5 text-start'>typeface without</p>
                                            <p className='testo-text-3 mx-5 text-start'>meaningful</p>
                                        </div>

                                    </div>

                                </div>

                                

                                

                            </Slider>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="section-8 mt-5">
                    <div className="part-1">
                        <div>
                            <div className='first'>
                                <img className='img-fluid section-8-img-1' src={img44} alt="" />
                                <img className='img-fluid section-8-img-2' src={img45} alt="" />
                                <img className='img-fluid section-8-img-3' src={img46} alt="" />
                            </div>

                            <div >
                                <img className='img-fluid section-8-img-5' src={img47} alt="" />
                                <img className='img-fluid section-8-img-6' src={img48} alt="" />
                            </div>
                        </div>
                        <div className="second">
                            <img className='img-fluid section-8-img-4' src={img49} alt="" />
                        </div>
                    </div>



                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home