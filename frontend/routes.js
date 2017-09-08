import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionsAdd from './components/questionComponents/QuestionsAdd';
import User from './components/User';
import Student from './components/studentComponent/Student';
import Instructor from './components/instructorComponent/Instructor';
import InstructorResult from './components/instructorComponent/InstructorResult';

// import ImageUpload from './components/ImageUpload';



export default (
	<Switch>
		<Route exact path="/" component={User}/>
		<Route path="/addQuestion" component={QuestionsAdd}/>
		<Route path="/student" component={Student}/>
		<Route path="/instructor/question" component={QuestionsAdd}/>
		<Route path="/instructor/result" component={InstructorResult}/>
		<Route path="/instructor" component={Instructor}/>
	</Switch>
);
