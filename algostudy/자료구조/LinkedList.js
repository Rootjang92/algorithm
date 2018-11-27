function Node(data) {
  this.data = data;
  this.next = null;
}


function LinkedList() {
  var _length = 0;
  var _head = null;
}

// 연결 리스트끝에 데이터 삽입 append 메서드

LinkedList.prototype.append = function(data) {
  var node = new Node(data);
  var curr;

  if(this._head == null) {
    this._head = node;
  } else {
    curr = this._head;

    while(curr.next) {
      curr = curr.next;
    }

    curr.next = node;
  }

  this._length ++;
};

var list = new LinkedList();
list.append(15);
list.append(10);