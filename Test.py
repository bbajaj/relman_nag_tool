import flask
def test_session_variable():
    print "\n******in test\n"
    pb = flask.session["people"]
    mgr = pb.managers
    print flask.session['username'], "\n", mgr
    
