
export class ModalService {
    private modals: any[] = [];
 
    add(modal: any) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
 
    remove(id: string) {
        // remove modal from array of active modals
        this.modals=this.modals.filter((model)=>model.id!==id);
    }
 
    open(id: string) {
        // open modal specified by id
        let modal = this.modals.find((model)=>model.id===id);
        modal.open();
    }
 
    close(id: string) {
        // close modal specified by id
        let modal =this.modals.find((model)=>model.id===id);
        modal.close();
    }
}