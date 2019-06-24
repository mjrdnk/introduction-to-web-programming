const db = firebase.firestore();

class Database {
  static getTodos() {
    return db
      .collection("todos")
      .get()
      .then(querySnapshot => {
        const todos = [];
        querySnapshot.forEach(doc => {
          todos.push({ ...doc.data(), _id: doc.id });
        });

        return todos;
      });
  }

  static saveTodo(todo) {
    return db.collection("todos").add(todo);
  }

  static updateTodo(todo) {
    const { _id, ...updatedData } = todo;

    db.collection("todos")
      .doc(_id)
      .update(updatedData)
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
      });
  }

  static deleteTodo(todoId) {
    db.collection("todos")
      .doc(todoId)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }
}
