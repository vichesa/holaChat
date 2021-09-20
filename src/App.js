import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

const projectID = '6ca37c72-eec6-4336-9a8c-828339e07ee7';

export default function App() {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <div>
            <ChatEngine 
                height="100vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        </div>
    )
}
