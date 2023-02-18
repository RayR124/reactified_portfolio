import { useState } from 'react';

const AboutMe = () => {
    const [blurb, setBlurb] = useState('Insert About Me blurb here');

    return (
        <div className="aboutMe" key={blurb}>
            <h2>About Me</h2>
            <p>
                {blurb}
            </p>
        </div>
    );
}

export default AboutMe;