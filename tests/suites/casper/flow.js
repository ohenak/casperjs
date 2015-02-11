// Generated by CoffeeScript 1.9.0
(function() {
  casper.test.begin('handling waits and timeouts', 13, function(test) {
    var step;
    step = 0;
    casper.start("tests/site/resources.html", function() {
      test.assertEquals(++step, 1, "step 1");
      this.wait(400, function() {
        test.assertEquals(++step, 2, "step 1.1");
        this.wait(200, function() {
          test.assertEquals(++step, 3, "step 1.1.1");
          return this.wait(200, function() {
            return test.assertEquals(++step, 4, "step 1.1.1.1");
          });
        });
        return this.then(function() {
          return test.assertEquals(++step, 5, "step 1.1.2.1");
        });
      });
      return this.wait(400, function() {
        return test.assertEquals(++step, 6, "step 1.2");
      });
    });
    casper.wait(200, function() {
      return test.assertEquals(++step, 7, "step 2");
    });
    casper.waitForSelector('#noneExistingSelector', function() {
      return test.fail("should run into timeout");
    }, function() {
      return test.assertEquals(++step, 8, "step 3 sucessfully timed out");
    }, 1000);
    casper.then(function() {
      test.assertEquals(++step, 9, "step 4");
      this.wait(300, function() {
        test.assertEquals(++step, 10, "step 4.1");
        return this.wait(300, function() {
          return test.assertEquals(++step, 11, "step 4.1.1");
        });
      });
      return this.wait(100, function() {
        return test.assertEquals(++step, 12, "step 5.2");
      });
    });
    casper.then(function() {
      return test.assertEquals(++step, 13, "last step");
    });
    return casper.run(function() {
      return test.done();
    });
  });

}).call(this);
