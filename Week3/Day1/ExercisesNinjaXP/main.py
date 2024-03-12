class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self,other_phone):
        text = f"{self.phone_number} calls to {other_phone}"
        self.call_history.append(text)
        print(text)

    def show_call_history(self):
        print(f"Call history is {self.call_history}")
    
    def send_message(self):
        pass
    
    def show_outgoing_messages(self):
        pass
    
    def show_incoming_messages(self):
        pass
    
    def show_messages_from(self):
        pass


