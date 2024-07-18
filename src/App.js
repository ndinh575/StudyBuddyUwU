import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./components/Navbar";
import SubjectProvider from "./context/SubjectContext";
import SubjectList from "./components/SubjectList";
import CategoryList from "./components/CaregoryList";
import Search from "./components/Search";
// import AddSubjectForm from './components/AddSubjectForm'; // Assume you have this component
// import SubjectDetail from './components/SubjectDetail'; // Assume you have this component
// import EditSubjectForm from './components/EditSubjectForm'; // Assume you have this component
import LoginPage from "./components/LoginPage";
import UserProvider from "./context/UserContext";
import SubjectDetail from "./components/SubjectDetail";

import RegistrationList from "./components/RegistrationList";
import EditRegistForm from "./components/RegistrationEdit";
import Quiz from "./quiz/Quiz";
import QuizList from "./quiz/QuizList";

const Home = () => (
  <Container className="mt-4">
  </Container>
);

const App = () => {
  return (
    <UserProvider>
      <SubjectProvider>
        <Router>
          <AppNavbar />
          <Container className="mt-4">
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              {/* <Route path="/add" element={<AddSubjectForm />} />
              <Route path="/edit/:id" element={<EditSubjectForm />} /> */}
              <Route path="/Subject/:id" element={<SubjectDetail />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/subjectsList" element={<SubjectList />} />
              <Route path="/registration" element={<RegistrationList />} />
              <Route path="/blog" element={<></>} />
              <Route path="/registration/edit/:id" element={<EditRegistForm />} />
              <Route path="/quiz-list" element={<QuizList />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </Container>
        </Router>
      </SubjectProvider>
    </UserProvider>
  );
};

export default App;
