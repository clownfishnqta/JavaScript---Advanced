class MailBox {
    constructor(){
        this._msgs = [];
    }
    get messageCount(){
        return this._msgs.length;
    }
    addMessage(subject, text){
        this._msgs.push({subject, text});
        return this;
    }
    deleteAllMessages(){
        this._msgs.length = 0;
    }
    findBySubject(substr){
       return this._msgs.filter(m => m.subject.includes(substr));
    }
    toString(){
        if(this._msgs.length === 0){
            return ' * (empty mailbox)'
        }
        let output = '';
        for (let msg of this._msgs) {
            output += ` *[${msg.subject}] ${msg.text}\n`;
        }
        return output;
    }
}
