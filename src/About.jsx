import React from 'react'

const About = () => {
    return (
        <div className='pt-28 md:pt-36 w-11/12 md:w-9/12 mx-auto text-navy'>
        <div className="p-3">
         <h1 className='text-xl font-mono mb-1'>About - </h1>
         <p>FocusTube is the website that can be watched only "Study with me" videos on Youtube.</p>
         </div>
         <div className="p-3">
         <h2 className='text-lg font-mono mb-1'>Story - </h2>
         <p>I'm a student studying web development. I like watching Youtube and I tend to waste my time watching Youtube. So, when I should study but I'd like to watch Youtube, I search "Study with me" videos on Youtube and then try to focus on my study. Youtube has a good algorithm that can analyze which videos are users wants to watch. Unfortunately, If I decided to study with "Study with me" videos, recommended videos by Youtube tend to disturb my study. For this reason, I created this website FocusTube!</p>
         <div className="flex">
         <p className='pr-3'>My github is here!</p>
         <a href="https://github.com/miacan2021">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
         </a>
         </div>
        </div>
        <div className="p-3">
        <h2 className='text-lg font-mono mb-1'>How to use - </h2>
        <ol className='list-decimal ml-4'>
            <li>Serch a video.</li>
                <ul className=''>
                    <li>Add keyword to search bar. It'll be searched "Study with me + 'your keyword'" automatically.</li>
                     <li>Recommend keyword:</li>
                     <ul className='ml-5'>
                        <li>Place(Tokyo, Paris, Hawaii, etc...)</li>
                        <li>University Name(Stanford, Cambridge, etc...)</li>
                        <li>Time(1-HOUR, 3-HOUR etc...)</li>
                        <li>Pomodoro</li>
                    </ul>
                </ul>
            <li>Choose a video</li>
            <li>Just press the play button, and study! Don't return to search.</li>
            <ul>
                <li>This website's concept is not disturbed your study. So, I don't recommend wast your time searching videos. </li>
            </ul>
            <li>Congrats! You can focus on your study:)</li>
        </ol>
        </div>
        <p className='pt-5'>If you find videos that you like, you can add them to your favourite list!</p>
        <p>Enjoy your study.</p>
        </div>
    )
}



export default About
