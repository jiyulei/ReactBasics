import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import Comment from './Component/CommentComponent';
import ApprovalCard from './Component/ApprovalCard';

const App = () => {
    return (
        //passing Component as child, in parent component just using as prop.children
        <div className="ui container comments"> 
            <ApprovalCard>
                <Comment name={faker.name.firstName()} time="Today 5:00PM" text="Nice post!" pic={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment name={faker.name.firstName()} time="Today 5:00PM" text="Nice post!" pic={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment name={faker.name.firstName()} time="Today 5:00PM" text="Nice post!" pic={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));