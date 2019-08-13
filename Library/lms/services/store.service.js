class StorageMService{
    constructor(storage,field){
        this.storage = storage;
        this.field = field;
        if(this.storage.getItem(this.field) == null || this.storage.getItem(this.field) == ''){
            this.storage.setItem(this.field,'');
        }

    }

    getFromStorage() {
        let infoString = this.storage.getItem(this.field);
        if(infoString === undefined || infoString === ''){
            return [];
        }
        return JSON.parse(infoString);
    }

    getFromStorageAsString(){
        return  this.storage.getItem(this.field);
    }

    addIntoStorage(object){
        try {
            let info = this.getFromStorageAsString();
            let length = info.length;
            if(length === 0){
                info = '[' + JSON.stringify(object) + ']';
            }else {
                info = info.substring(0, length - 1) + ',' + JSON.stringify(object) + ']';
            }
            this.storage.setItem( this.field, info );
        }catch (e) {
            if(e instanceof JSON){
                throw new Error('there are something wrong with your object');
            }
        }
    }

    setIntoStorage(obj){
        try {
            this.storage.setItem( this.field, JSON.stringify(obj) );
        }catch (e) {
            if(e instanceof JSON){
                throw new Error('there are something wrong with your object');
            }
        }
    }
}
