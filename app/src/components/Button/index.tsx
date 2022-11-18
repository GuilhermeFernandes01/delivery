import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './style';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading ? (
        <Text weight="600" color="#FFFFFF">
          {children}
        </Text>
      ) : (
        <ActivityIndicator color="#FFFFFF" />
      )}
    </Container>
  );
}