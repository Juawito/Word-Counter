      const workerFunction = () => {
          onmessage = ({data}) => {
            const instructions = data;
            console.log(`This is in the Worker.js file`);
            self.postMessage(instructions);
            self.close();
        }
          
      }
      if(window != self){
          workerFunction()
      }
    

