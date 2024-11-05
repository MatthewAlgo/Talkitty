import ClassicalInputField from '../../components/ui/cards/classical-intro-inputfield';
import React from 'react';

const IntroPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1 style={{ fontWeight: 'bold' }}>Hello, My name is </h1>
            <ClassicalInputField placeholder="Name" type="text" value="" onChange={() => {}} />
            <h1>I am ready to talk with Talkitty</h1>
        </div>
    );
};

export default IntroPage;