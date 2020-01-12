// Implementation of List data structure, a la Michael McMillian

// Desireable improvements:
    // make insert method allow insertion of multiple elements
    //                and allow locating insertion by index

class List {
    constructor() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;  
    };
    append(element){
        this.dataStore[this.listSize++] = element;
    };
    find(element){
        for (var i = 0; i < this.dataStore.length; i++){
            if (this.dataStore[i] === element){
                return i;
            }
        };
        return -1;
    };
    remove(element){
        //removes element, shifting indices for remaining indices as needed
        var foundAt = this.find(element);
        if (foundAt > -1){
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    insert(newElement, afterThis=undefined, byIndex=false){
        // inserts newElement after first instance of afterThis (if possible)
        // leaving afterThis=undefined inserts at front of list.
        // byIndex=true makes afterThis an index.
        if (afterThis === undefined){
            this.dataStore.splice(0, 0, newElement)
            return true;
        }
        if (byIndex){
            var insertPos = afterThis;
        } else {
            var insertPos = this.find(afterThis);
        }
        if (insertPos != -1){
            this.dataStore.splice(insertPos+1, 0, newElement);
            ++this.listSize;
            return true;
        }
        return false;
    };
    length(){
        return this.listSize;
    }
    clear(){
        delete this.dataStore;  // not sure why delete is necessary
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    toString(){
        return this.dataStore;
    }
    contains(element){
        if (this.find(element) === -1){
            return false;
        }
        return true;
    }
    getElement(){
        return this.dataStore[this.pos];
    }
    setPos(position){
        this.pos = position;
    }
    getPos(position){
        return this.pos;
    }
    previous(){
        // returns undefined if not hasPrevious
        //   Possibly should change this behavior?
        var thisOne = this.dataStore[this.pos];
        --this.pos;
        return thisOne;
    }
    next(){
        // returns undefined if not hasNext
        //   Possibly should change this behavior?
        var thisOne = this.dataStore[this.pos];
        ++this.pos;
        return thisOne;
    }
    hasNext(){
        if (this.pos > this.listSize - 1) {
            return false;
        }
        return true;
    }
    hasPrevious(){
        if (this.pos <= 0) {
            return false;
        }
        return true;
    }
    front(){
        this.pos = 0;
    }
    end(){
        this.pos = this.listSize - 1;
    }
}

function filterForAttribute(list, property, x){
    // filters list, displaying only those elements such that element[property] === x
    var newList = new List();
    for (list.front(); list.hasNext();){
        elem = list.next()
        if (elem[property] === x){
            newList.append(elem);
        }
    }
    return newList;
}

function test(){
    // Testing functions
    // Not very robust or complete
    var numbers = new List()
    numbers.append(1)
    numbers.append(2)
    numbers.append(3)
    console.log('[1, 2, 3] == ', numbers.dataStore)

    console.log('Testing position getters and setters')
    console.log('====================================')
    console.log('0 ==', numbers.pos)
    console.log('0 ==', numbers.getPos())
    numbers.setPos(1)
    console.log('1 ==', numbers.getPos())
    numbers.front()
    console.log('0 ==', numbers.getPos())
    numbers.end()
    console.log('2 ==', numbers.getPos())
    console.log(numbers.find(2))
    console.log(numbers.find(4))

    console.log('Testing find and remove')
    console.log('=======================')
    console.log('-1 ==', numbers.find(0))
    console.log('0 ==', numbers.find(1))
    
    
}



