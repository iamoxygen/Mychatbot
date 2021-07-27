class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage("Hello Buddy");
        this.addChatbotMessage(message);

    }
    addChatbotMessage = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));

    };

  }
  
  export default ActionProvider;