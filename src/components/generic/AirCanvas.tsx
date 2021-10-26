/* eslint-disable max-len */
import React, { useRef, useState, useEffect } from 'react'
import img_blink2 from '../../assets/air-conditioner/blink2.png'
import img_blowing1 from '../../assets/air-conditioner/blowing1.png'
import img_blowing2 from '../../assets/air-conditioner/blowing2.png'
import img_blowing3 from '../../assets/air-conditioner/blowing3.png'
import img_looking_left from '../../assets/air-conditioner/looking_left.png'
import img_looking_right from '../../assets/air-conditioner/looking_right.png'
import img_sleeping1 from '../../assets/air-conditioner/sleeping1.png'
import img_sleeping2 from '../../assets/air-conditioner/sleeping2.png'
import img_start_blowing1 from '../../assets/air-conditioner/start_blowing1.png'
import img_start_blowing2 from '../../assets/air-conditioner/start_blowing2.png'
import img_start_blowing3 from '../../assets/air-conditioner/start_blowing3.png'
import img_waking_up1 from '../../assets/air-conditioner/waking_up1.png'
import img_waking_up2 from '../../assets/air-conditioner/waking_up2.png'
import img_waking_up3 from '../../assets/air-conditioner/waking_up3.png'

// types
type Props = {
  active: boolean
}

interface IObjectKeys {
  [key: string]: HTMLImageElement;
}

interface imagesType {
  [key: string]: string;
}

type sequenceType = [string, number][]

// images names
const blink2 = 'blink2'
const blowing1 = 'blowing1'
const blowing2 = 'blowing2'
const blowing3 = 'blowing3'
const looking_left = 'looking_left'
const looking_right = 'looking_right'
const sleeping1 = 'sleeping1'
const sleeping2 = 'sleeping2'
const start_blowing1 = 'start_blowing1'
const start_blowing2 = 'start_blowing2'
const start_blowing3 = 'start_blowing3'
const waking_up1 = 'waking_up1'
const waking_up2 = 'waking_up2'
const waking_up3 = 'waking_up3'

const imagesNames = [
  blink2,
  blowing1,
  blowing2,
  blowing3,
  looking_left,
  looking_right,
  sleeping1,
  sleeping2,
  start_blowing1,
  start_blowing2,
  start_blowing3,
  waking_up1,
  waking_up2,
  waking_up3,
]

const allImages: imagesType = {
  img_blink2,
  img_blowing1,
  img_blowing2,
  img_blowing3,
  img_looking_left,
  img_looking_right,
  img_sleeping1,
  img_sleeping2,
  img_start_blowing1,
  img_start_blowing2,
  img_start_blowing3,
  img_waking_up1,
  img_waking_up2,
  img_waking_up3,
}

const IMAGE_WIDTH = Math.floor(2 * 63 * Math.min(window.innerWidth / 280))
const IMAGE_HEIGHT = Math.floor(2 * 35 * Math.min(window.innerWidth / 280))
let imageLoadedCounter = 0
const IMAGES_TO_LOAD = imagesNames.length

// animation sequences
const sleeping: sequenceType = [[sleeping1, 75], [sleeping2, 75]] // the second value represents the frames to wait
const wakingUp: sequenceType = [[waking_up1, 7], [waking_up2, 7], [waking_up3, 7], [looking_left, 50], [looking_right, 50], [looking_left, 50], [waking_up2, 7], [blink2, 7], [waking_up2, 7], [looking_right, 50], [looking_left, 50]]
const goingToSleep: sequenceType = [...wakingUp].reverse()
const startBlowing: sequenceType = [[waking_up3, 7], [waking_up2, 7], [waking_up1, 7], [start_blowing1, 10], [start_blowing2, 10], [start_blowing3, 10]]
const stopBlowing: sequenceType = [...startBlowing].reverse()
const blowing: sequenceType = [[blowing1, 20], [blowing2, 20], [blowing3, 20], [blowing2, 20]]

// load images
const images: IObjectKeys = {}

imagesNames.forEach((name) => {
  const image = new Image(IMAGE_WIDTH, IMAGE_HEIGHT)

  image.onload = () => { imageLoadedCounter += 1 }
  image.src = allImages[`img_${name}`]
  images[name] = image
})


const Canvas = ({ active }: Props): JSX.Element => {
  const canvasRef = useRef(document.createElement('canvas'))
  const [isInitial, setIsInitial] = useState(true)

  const getInitialState = (): sequenceType[] => {
    if (isInitial) {
      return active ? [blowing] : [sleeping]
    }
    else {
      return !active ? [blowing] : [sleeping]
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    let animationFrameId: number

    // setting canvas consts
    const cw = canvas.width
    const cx = cw / 2

    const ch = canvas.height
    const cy = ch / 2

    let framesCounter = 0

    const queue = getInitialState()

    // initialize sequence variables
    let currentSequence: sequenceType = []
    let frame = -1
    let imageName = ''
    let framesToWait = -1

    // add images to queue
    if (!isInitial) {
      if (active) {
        queue.push(wakingUp, startBlowing, blowing)
      }
      else {
        queue.push(stopBlowing, goingToSleep, sleeping)
      }
    } else {
      setIsInitial(false)
    }

    //Our draw came here
    const render = (): void => {
      animationFrameId = window.requestAnimationFrame(render)

      if (imageLoadedCounter < IMAGES_TO_LOAD) return

      if (framesCounter > framesToWait) {
        frame += 1
        const currentSequenceLength = currentSequence.length

        if (queue.length && frame === currentSequenceLength) currentSequence = queue.shift() as sequenceType
        if (frame === currentSequenceLength) frame = 0

        imageName = currentSequence[frame][0]
        framesToWait = currentSequence[frame][1]

        framesCounter = 0
      }

      // clear the canvas here!
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(images[imageName], cx - Math.floor(IMAGE_WIDTH / 2), cy - Math.floor(IMAGE_HEIGHT / 2), IMAGE_WIDTH, IMAGE_HEIGHT)
      framesCounter += 1
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return <canvas ref={canvasRef} style={{ width: '100%', height: 'min(204px, 50vw)' }} />
}

export default Canvas