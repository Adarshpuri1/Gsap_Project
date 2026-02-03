import React from 'react'

const Video = () => {
  const path="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1770143604~exp=1770147204~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=b2e9bd65d6b4bace827275874d1e69e439f77417db42ce81798caa96a948361e&r=dXMtZWFzdDE%3D";
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={path}></video>
    </div>
  )
}

export default Video
