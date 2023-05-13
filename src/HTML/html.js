import React from 'react'
import './html.css'
import Audio from './audio/krishnaflu-pa2luqdy-37180.mp3'

const html = () => {
  return (
    <div className='div1'>
    <h1>Heading tags</h1>
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h6>Hello</h6>
      <br></br>

    <h1>Image tag</h1>
      <img src='https://cdn.pixabay.com/photo/2023/03/19/09/20/animals-7862112_960_720.jpg' alt='' height='400px' width='300px'></img>
      <img src='https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_960_720.jpg' alt='' height='400px' width='700px'></img>
      <br></br>

    <h1>Iframe Tag</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zJi8Ry_H_5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.2002716644383!2d73.68002411436485!3d18.246638482257943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc28fa3eb07c019%3A0xe2f323ba03aacd31!2sRajgad%20Fort!5e0!3m2!1sen!2sin!4v1679917426859!5m2!1sen!2sin" width="600" height="450" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <br></br>

    <h1>Audio Tag</h1>
    <audio src={Audio} controls autoPlay loop muted></audio>
    <br></br>

    <table bgcolor='yellow' border={'1px'} cellPadding={'2px'} cellSpacing={'2px'}>
        <tr>
            <td>SrNo</td>
            <td>Name</td>
            <td>Id</td>
            <td>Class</td>
        </tr>
        <tr>
            <td rowSpan={2}>1</td>
            <td>Dinesh</td>
            <td>07</td>
            <td>Msc-1</td>
        </tr>
        <tr>
            {/* <td>2</td> */}
            <td>Rahul</td>
            <td>29</td>
            <td>Msc-1</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan={2}>Mayur</td>
            {/* <td>36</td> */}
            <td>Msc-1</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Ganesh</td>
            <td>01</td>
            <td>Tachnission</td>
        </tr>
    </table>
    </div>

  )
}

export default html
