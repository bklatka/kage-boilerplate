/**
 * Created by bernard on 17.04.17.
 */

module.exports = {

  catchError: function(err) {
      console.log(err);
      this.emit('end');
  }

};

