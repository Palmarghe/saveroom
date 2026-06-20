import React from 'react';
import { Text, View } from 'react-native';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unexpected error' };
  }

  componentDidCatch(error, info) {
    // Production hook point: send error + info to a crash reporting service.
  }

  render() {
    if (this.state.hasError) {
      const styles = this.props.styles;
      return (
        <View style={styles.root}>
          <View style={[styles.card, { margin: 20 }]}>
            <Text style={styles.tag}>SaveRoom</Text>
            <Text style={styles.title}>Uygulama hatasÄ±</Text>
            <Text style={styles.text}>{this.state.message}</Text>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

