// Generic Classes

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('item 1');
textStorage.addItem('item 2');
textStorage.removeItem('item 1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

const objStorage = new DataStorage<object>();
const alexObj = { name: 'alex' };
const parkObj = { name: 'park' };
objStorage.addItem(alexObj);
objStorage.addItem(parkObj);
objStorage.removeItem(alexObj);
console.log(objStorage.getItems());