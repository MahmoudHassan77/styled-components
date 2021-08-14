import React from 'react';
import Card from './styledComponents/Card';
import AppContainer from './styledComponents/Container';
import Flex from './styledComponents/Flex';
import {H1} from './styledComponents/GeneralComponents';
import {Image, CardHeader, CardFooter, ALink} from './styledComponents/CardComponents';


function App() {
  return (
    <AppContainer>
      <H1 margin={"20px 0"}>Hello React in styled Components</H1>
      <hr style={{width:"80%"}} size={8}/>
      <Flex  width={"100%"} direction={"row"}>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="primary" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="warning" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="success" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="warning" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="primary" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
        <Card>
          <Image src="https://images.unsplash.com/photo-1628521628819-cad06684639a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
          <CardHeader>
            <H1>React js Introduction</H1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </CardHeader>
          <CardFooter>
              <ALink backColor="success" href="https://www.google.com.eg/"> Click Me </ALink>
          </CardFooter>
        </Card>
      </Flex>
    </AppContainer>
  );
}

export default App;
