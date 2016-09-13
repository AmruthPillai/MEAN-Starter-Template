angular.module('PostService', []).factory('Post', ['$http', function($http) {
    return {
        // Call to get all posts
        get: function() {
            return $http.get('/api/posts');
        },
        // Call to create a new post
        create: function(postData) {
            return $http.post('/api/posts', postData);
        },
        // Call to delete a post
        delete: function(id) {
            return $http.delete('/api/posts/' + id);
        }
    }
}]);