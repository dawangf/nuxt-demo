export default function (context) {
  console.log('context', context)
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}
