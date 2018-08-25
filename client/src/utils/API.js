  import axios from "axios";

  export default {
    // Gets all books
    getCards: function() {
      return axios.get("/api/cards");
    },
    // Gets the book with the given id
    getCard: function(id) {
      return axios.get("/api/cards/" + id);
    },
    getBank: function(){
      return axios.get("/api/cards/bank")
    },

    PostSrars: function(body) {
      return axios.post("/api/cards/stars", body)
    },

    getStars: function(body) {
      return axios.post("/api/cards/getstars", body)
    },

    getSearchResults: function(search){
      return axios.post("/api/cards/search", search)
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/cards/" + id);
    },
    // Saves a book to the database
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    }, 
    loadUser: function(authId) {
      return axios.get("/api/user/loaduser/" + authId);
    }, 
    create:function(body) {
      return axios.post("/api/comment/", body);
    }, 
    getCommentsCard:function(cardId) {
      console.log(cardId);
      return axios.get("/api/comment/card/" + cardId);
    }, 
    getCommentsUser:function(userId) {
      return axios.get("/api/comment/user/" + userId);
    }, 
    updateUserName:function(userId, body) {
      console.log("user id in update user", userId);
      return axios.post("/api/user/updatename/" + userId, body);
    },
    deleteComment:function(id) {
      return axios.delete("/api/comment/delete/" + id);
    }
  };
