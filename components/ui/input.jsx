import { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './input.styles';

export function Input({ style, error, showToggle, secureTextEntry, ...rest }) {
  const [hidden, setHidden] = useState(true);

  return (
    <View>
      <View style={styles.wrapper}>
        <TextInput
          style={[
            styles.input,
            showToggle && styles.inputWithToggle,
            error ? styles.inputError : null,
            style,
          ]}
          placeholderTextColor="#687076"
          secureTextEntry={showToggle ? hidden : secureTextEntry}
          {...rest}
        />
        {showToggle && (
          <Pressable onPress={() => setHidden((h) => !h)} style={styles.toggle}>
            <Ionicons name={hidden ? 'eye-off' : 'eye'} size={20} color="#687076" />
          </Pressable>
        )}
      </View>
      {error ? (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle-outline" size={14} color="#ef4444" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
}
