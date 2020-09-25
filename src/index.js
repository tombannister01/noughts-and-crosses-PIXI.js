import * as PIXI from 'pixi.js'

window.onload = () => {

  const app = new PIXI.Application({
    view: document.getElementById('canvas'),
    width: 1000,
    height: 1000
  })

  const loader = new PIXI.Loader()


  loader.add('resources/cat.png')
  loader.load((loader, resources) => {

    const alienImages = ['resources/alien1.png', 'resources/alien2.png', 'resources/alien3.png', 'resources/alien4.png']
    const textureArray = []

    for (let i = 0; i < 4; i++) {
      const texture = PIXI.Texture.from(alienImages[i])
      textureArray.push(texture)
    }

    const animatedSprite = new PIXI.AnimatedSprite(textureArray)
    app.stage.addChild(animatedSprite)

    // app.sharedTicker = true
    animatedSprite.scale.x = 0.5
    animatedSprite.scale.y = 0.5
    animatedSprite.play()
    animatedSprite.animationSpeed = 0.01
    let direction = 'down'
    app.ticker.add(function (time) {
      app.renderer.render(app.stage)

      // if direction right +=1 x
      // if direction down +=1 y
      // animatedSprite
      if (direction === 'down') {
        animatedSprite.y += 1
      } else if (direction === 'right') {
        animatedSprite.x += 1
      } else if (direction === 'up') {
        animatedSprite.y -= 1
      } else if (direction === 'left') {
        animatedSprite.x -= 1
      }
      if (animatedSprite.y > 100) {
        direction = 'right'
      } else if (animatedSprite.x > 100) {
        direction = 'up'
      }

      // if (animatedSprite.x < 100) {
      //   animatedSprite.x += 1

      // } else animatedSprite.x -= 1

      // if (animatedSprite.y < 100) {
      //   animatedSprite.y += 1

      // } else animatedSprite.y -= 1

    })

    // ((deltaTime) => {
    // })

    // const ticker = PIXI.Ticker.shared
    // ticker.start()
    // ticker.autoStart = true


    // animatedSprite.autoUpdate = true
    console.log('animation playing', animatedSprite.playing)
    // console.log('resources: ', resources['resources/cat.png'])
    // const texture = PIXI.Texture.from('resources/cat.png')
    // const sprite = new PIXI.Sprite(texture)
    // sprite.scale.x = 0.3
    // sprite.scale.y = 0.3
    // sprite.x = 50
    // app.stage.addChild(sprite)
  })





  // console.log(PIXI)
}

