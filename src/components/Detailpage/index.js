import { connect } from 'react-redux';
import React, {Component} from 'react';
import ImgIcon from '../ImageIcon';
import HeaderComponent from '../HeaderComponent/index.js';
import Tile from '../Tile';
import SidebarAbout from '../SidebarAbout';
import './style.scss';

class Detailpage extends Component {    
    constructor(props,context){
        super(props,context);
    }  

    render() {   
        const topBg = {
            backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url( https://australianhiker.com.au/wp-content/uploads/2016/09/pexels-photo-4-1400x933.jpg)',   
        };     
        return (
            <div className="about-wrap main-left-right-col">
                 
                 <div className="page-container">
                    <HeaderComponent/>
                    <div className="left-col-70">
                         
                        <div className="tile-conatiner content">
                            <div className="about-top-banner fullimg" style={topBg}>
                                <div className="page-title">
                                    <h2>Gill &amp; Tim</h2>
                                    <h3>Savage</h3>
                                </div>
                            </div>
                            <div className="btm-container">
                                <h3 >Australian Hiker</h3>          
                                <p>The concept for Australian Hiker began in 2014 about the time I started planning for our 2016 Larapinta Trail trip. I’m one of those people who need all the information (down to the finest detail) and after months of research I discovered that the available guide books and internet sites still left me with questions concerning planning for our trip.</p>
                                <p>This site was officially launched on 11 November 2016 with the long term aim being to build Australian Hiker into your <strong><em>‘Go to Resource’</em></strong> for Australian hiking, as well as providing a southern hemisphere perspective on overseas hiking.</p>
                                <p>While we realise that no single site can provide every piece of information on all things hiking, this website and its associated podcast is designed to provide a unique resource, including upfront opinions based on our experiences on the trail that we hope will assist you in achieving your hiking goals.</p>
                                <ImgIcon className="img-responsive" src="https://australianhiker.com.au/wp-content/uploads/2016/09/Tim-and-Gill-e1477993820259.jpg"></ImgIcon>
                                <p>Gill and Tim Savage</p>
                                <h3 id="tim-savage">Tim Savage</h3>
                                <p >
                                    <a href="https://t.cfjump.com/47903/b/16050">
                                        <ImgIcon className="size-full wp-image-5578 aligncenter" src="https://australianhiker.com.au/wp-content/uploads/2017/04/af8e7c23-518b-4f78-bcf0-d8eb77fed19e.jpg" alt="" />
                                    </a>
                                </p>
                                <p>One of the earliest skills we learn is how to walk and for most of us we keep on doing so until the day we die. It is one of the few activities that we share in common, no matter what our background or beliefs; we usually don’t think about it, we just do it. For me walking is more than just getting from point A to point B, it is a way to connect with the world in an almost primal manner, as well as allowing me to tune out of the modern world. Most of my ‘spiritual’ moments throughout my life have come from being in the outdoors and it’s where I love being the most.</p>
                                <p>I have a background in landscape architecture, horticulture and cultural heritage with a particular interest in how we engage with the environment. Through this interaction we create connections with the landscape and in doing so create a voice that helps to conserve our natural resources.</p>
                                <p>I have been hiking on and off for over 40 years in a number of countries around the world but don’t claim to be an expert. I know what works for me based on my own experiences, have an insatiable love for learning, and just like getting out in nature.</p>
                                <p>My idea of an enjoyable walk ranges from a short walk to work through to a multi-day hikes, and even multi-week hikes covering 100’s of kilometres . In the past few years I have become interested in long distance hiking and with that the need to not only lighten my load but also to reassess every aspect of how I do things to manage road blocks my body throws at me.  I cannot just throw myself into a hike like I could when I was younger and need to work out smarter ways to achieve my hiking goals.</p>
                                <p>iTunes at <a href="https://itunes.apple.com/au/podcast/australian-hiker/id1175688803?mt=2" target="_blank" rel="noopener">Australian Hiker podcast</a></p>
                                <p>Stitcher at <a href="http://www.stitcher.com/podcast/australian-hiker-podcast/australian-hiker" target="_blank" rel="noopener">Australian Hiker podcast</a></p>
                                <h3 id="contact-us">Contact us</h3>
                                <p>If you wish to contact us directly us one of the following options:</p>
                                <p>Email: <a href="#">tim@sat.com.au&nbsp;</a></p>
                                <p><a href="#">Facebook</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="right-col-30">   
                        <SidebarAbout/>                     
                    </div>
                </div>
            </div>  
        )    
    }
}

export default Detailpage;