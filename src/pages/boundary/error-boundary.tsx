import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { UnauthorizedError } from '../../lib/api'
import ErrorWidget from '../../components/app/error-widget'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    const { error } = this.state

    if (!error) return this.props.children

    if (error instanceof UnauthorizedError) {
      return <Navigate to="/auth/login" replace />
    }

    return (
      this.props.fallback ?? (
        <ErrorWidget onRetry={() => this.setState({ error: null })} error={error} />
      )
    )
  }
}
