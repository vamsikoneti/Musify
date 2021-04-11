import React, { ReactElement, useEffect, useState } from 'react';
import { Layout, Row, Space, Spin, Typography } from 'antd';
import { HeartOutlined, SoundOutlined } from '@ant-design/icons';
import { Provider } from 'react-redux';
import PlaylistEditor from './PlaylistEditor';
import TrackAdder from './TrackAdder';
import AudioPlayer from './AudioPlayer';
import { getStore } from '../store/store';
import TrackDeleter from './TrackDeleter';

export default function App(): ReactElement {
  const [app, setApp] = useState(<LoadingPage />);
  useEffect(() => {
    getStore().then((store) => {
      setApp(
        <Provider store={store}>
          <AppLayout />
        </Provider>,
      );
    });
  }, []);
  return app;
}

function LoadingPage(): ReactElement {
  return (
    <Row style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Spin size='large' />
    </Row>
  );
}

function AppLayout(): ReactElement {
  return (
    <Layout style={{ minHeight: '100%' }}>
      <Layout.Header>
        <Typography.Text style={{ color: 'white' }}>
          <Space>
            <SoundOutlined /> Musify - Edit and listen to your music playlists
          </Space>
        </Typography.Text>
      </Layout.Header>
      <Layout.Content style={{ padding: 16 }}>
        <Space direction='vertical'>
          <AudioPlayer />
          <PlaylistEditor />
          <TrackAdder />
          <TrackDeleter />
        </Space>
      </Layout.Content>
      <Layout.Footer>
        Made with <HeartOutlined /> by Neel Kamath (PES2201800467), Vamsi Krishna (PES2201800147), and Arjun Shekar
        (PES2201800072).
      </Layout.Footer>
    </Layout>
  );
}
