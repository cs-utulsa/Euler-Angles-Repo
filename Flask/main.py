from website import create_app

app = create_app()

if __name__ == '__main__': #only when running 
    app.run(debug=True)     # dynamic py code change 
