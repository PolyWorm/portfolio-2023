import './ProjectModal.css';
import React from 'react';

function ProjectModal({ project, onClose }) {
    return (
        <div className="project-modal">
            <button onClick={onClose} className="close">x</button>
            <div className="content">
                {project === "Bello Coffee Kiosk" && (
                    <iframe className="video" width="500" height="500" src="https://www.youtube.com/embed/X92IzAf8UVM?autoplay=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1" frameborder="0" allowfullscreen></iframe>

                )}
                {project === "Hueshift.li" && (
                    <iframe className="video" width="305" height="500" src="https://www.youtube.com/embed/5TSvISC2QEs?autoplay=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1" frameborder="0" allowfullscreen></iframe>

                )}
                {project === "Nonadox" && (
                    <iframe className="video" width="280" height="500" src="https://www.youtube.com/embed/Ng3cTGPhpoI?autoplay=1&modestbranding=1&rel=0&fs=0&color=white&controls=0&disablekb=1" frameborder="0" allowfullscreen></iframe>

                )}
                <div className="description">
                    <h1>{project}</h1>
                    {project === "Bello Coffee Kiosk" && (
                        <p>
                            This is a self-ordering kiosk iPad app that I built using React Native. It allows customers to place orders and pay directly from the kiosk, without needing to interact with a barista. The app features a clean and intuitive user interface that guides customers through the ordering process. It also integrates with the point of sale system to ensure that orders are processed quickly and accurately.<br /><br />
                            Drawing on my background in cognitive science, I designed a user interface that is intuitive and easy to use, even for those who aren't tech-savvy. After several iterations, I arrived at a design that is both visually appealing and highly functional. I limited the number of customization options to ensure a fast and efficient ordering process, while still allowing customers to personalize their drinks and snacks.<br /><br />

                            To ensure that the app would meet the needs of the customers, I conducted user testing and made improvements based on feedback. This allowed me to refine the design and create an app that truly enhances the customer experience. Using React Native and Square's API, I built a reliable, secure app that integrates seamlessly with the existing Square point-of-sale system.<br /><br />
                        </p>
                    )}
                    {project === "Hueshift.li" && (
                        <p>
                            <a href="https://hueshift.li/">Hueshift.li</a> is a web-based puzzle game inspired by the Rubik's Cube and sliding puzzles. The goal is to solve the puzzle as quickly as possible, with the added challenge of randomized colors and patterns. With infinite combinations, no two games are the same.<br/><br/>

                            The idea for Hueshift.li came from a desire to create a unique and creative concept for a puzzle game. The challenge was to create a randomized puzzle with infinite combinations, while also keeping the game simple and intuitive. The result is a game that is easy to learn, but difficult to master.<br/><br/>

                            To create the game, HTML, CSS, JavaScript, and React were used. Hueshift.li does not have a backend, meaning no server-side code is required. The design is intentionally minimalistic, with no instructions needed. Players can discover the objective and mechanics simply by playing the game.<br/><br/>

                            If you're a fan of Rubik's Cubes or sliding puzzles, or just enjoy a good challenge, give Hueshift.li a try. See if you can beat your own time and solve the puzzle!

                        </p>
                    )}
                    {project === "Nonadox" && (
                        <p>

                            Nonadox was a puzzle game with 32 meticulously designed levels that challenged players to match lights with the corresponding outer ring on each square. The game had a three by three grid with the same mechanics on each level, but with different arrangements of the board and increasingly difficult challenges. Players were ranked based on the number of moves used to complete each level, with the goal being to use as few moves as possible for a higher score.
                            <br /><br />The game required strategic thinking and efficient planning, making it a fun and unique puzzle game experience.
                            To create Nonadox, I utilized a range of technologies, including Xcode, SpriteKit, Ableton for music, and Photoshop and Illustrator for graphics. I coded the game in Swift, and I created the music and graphics myself. As a solo project, Nonadox allowed me to showcase my creativity and programming skills in every aspect of the game's development, from level design to sound and visual effects.
                            <br /><br />
                            My primary motivation for creating Nonadox was to provide a fun and unique game for my peers. I believe that Nonadox's challenging gameplay, coupled with its simple but effective design, provided a stimulating experience for players of all ages. While Nonadox is no longer available in the App Store, I am proud of the game I created and the skills I honed during its development.
                            <br /><br />
                            Overall, Nonadox was a testament to my love for programming, design, and puzzle games. I hope that players who had the chance to enjoy the game found it as challenging and rewarding as I intended it to be.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
