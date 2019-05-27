const { createRemoteFileNode } = require('gatsby-source-filesystem');
const axios = require('axios');

const API_URI = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=1166201.ee9b4d0.b39fad683cd34eea831d050edad4f904';

exports.sourceNodes = async ({
  actions, createNodeId, store, cache,
}) => {
  const { createNode, createNodeField } = actions;
  // Fetch data
  const { data } = await axios.get(API_URI);

  for (const image of data.data) {
    let fileNode;
    try {
      fileNode = await createRemoteFileNode({
        url: image.images.standard_resolution.url,
        cache,
        store,
        createNode,
        createNodeId,
        ext: '.jpg',
      });
      await createNodeField({
        node: fileNode,
        name: 'InstagramImage',
        value: 'true',
      });
      await createNodeField({
        node: fileNode,
        name: 'link',
        value: image.link,
      });
      await createNodeField({
        node: fileNode,
        name: 'created',
        value: image.created_time,
      });
      await createNodeField({
        node: fileNode,
        name: 'caption',
        value: image.caption.text,
      });
      await createNodeField({
        node: fileNode,
        name: 'likes',
        value: image.likes.count,
      });
    } catch (error) {
      console.warn('error creating node', error);
    }
  }
};
